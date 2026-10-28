const { expect, test } = require('@playwright/test');

const homeWidths = [320, 390, 768, 1280, 1440];
const guidePaths = [
  'academic-stress',
  'emotional-wellbeing',
  'social-challenges',
  'life-balance',
];

function collectRuntimeErrors(page) {
  const errors = [];
  page.on('console', message => {
    if (message.type() === 'error') {
      errors.push(message.text());
    }
  });
  page.on('pageerror', error => errors.push(error.message));
  return errors;
}

async function expectNoHorizontalOverflow(page) {
  expect(
    await page.evaluate(
      () => document.documentElement.scrollWidth <= window.innerWidth
    )
  ).toBe(true);
}

for (const width of homeWidths) {
  test(`home layout holds at ${width}px`, async ({ page }) => {
    const runtimeErrors = collectRuntimeErrors(page);
    await page.setViewportSize({ width, height: 844 });
    await page.goto('/compass/');

    const headerBox = await page.locator('.siteHeader').boundingBox();
    expect(headerBox.height).toBeLessThanOrEqual(64);
    await expectNoHorizontalOverflow(page);
    await expect(page.locator('.directionRow')).toHaveCount(4);
    await expect(page.locator('.dirCard')).toHaveCount(0);

    const titleBox = await page.locator('.heroTitle').boundingBox();
    const directionsBox = await page.locator('.directionsTitle').boundingBox();
    expect(Math.abs(titleBox.x - directionsBox.x)).toBeLessThanOrEqual(1);

    if (width <= 768) {
      await expect(page.getByRole('button', { name: 'Menu' })).toBeVisible();
      const actionBox = await page.locator('.primaryAction').boundingBox();
      expect(actionBox.y + actionBox.height).toBeLessThanOrEqual(844);
    } else {
      await expect(page.getByRole('button', { name: 'Menu' })).toBeHidden();
    }

    expect(runtimeErrors).toEqual([]);
  });
}

for (const width of [320, 390, 768]) {
  test(`responsive navigation and skip link work at ${width}px`, async ({
    page,
  }) => {
    const runtimeErrors = collectRuntimeErrors(page);
    await page.setViewportSize({ width, height: 844 });
    await page.goto('/compass/');

    await page.keyboard.press('Tab');
    const skipLink = page.getByRole('link', { name: 'Skip to content' });
    await expect(skipLink).toBeFocused();
    await skipLink.click();
    await expect(page.locator('#main')).toBeFocused();

    const menuButton = page.getByRole('button', { name: 'Menu' });
    const closedHeight = await page
      .locator('.siteHeader')
      .evaluate(element => Math.round(element.getBoundingClientRect().height));

    await menuButton.click();
    await expect(menuButton).toHaveAttribute('aria-expanded', 'true');
    await expect(
      page.getByRole('navigation', { name: 'Primary' })
    ).toBeVisible();
    const linkHeights = await page
      .locator('#primary-navigation .navLink')
      .evaluateAll(links =>
        links.map(link => Math.round(link.getBoundingClientRect().height))
      );
    expect(linkHeights.every(height => height >= 44)).toBe(true);

    const openHeight = await page
      .locator('.siteHeader')
      .evaluate(element => Math.round(element.getBoundingClientRect().height));
    expect(openHeight).toBe(closedHeight);

    await page.keyboard.press('Tab');
    await expect(
      page.getByRole('link', { name: 'Home', exact: true })
    ).toBeFocused();
    await page.keyboard.press('Escape');
    await expect(menuButton).toHaveAttribute('aria-expanded', 'false');
    await expect(menuButton).toBeFocused();

    await menuButton.click();
    await page.getByRole('link', { name: 'Home', exact: true }).click();
    await expect(menuButton).toHaveAttribute('aria-expanded', 'false');
    await expect(page.locator('.heroTitle')).toBeFocused();
    expect(await page.evaluate(() => Math.round(window.scrollY))).toBe(0);

    await menuButton.click();
    await page.getByRole('link', { name: 'Compass home' }).click();
    await expect(menuButton).toHaveAttribute('aria-expanded', 'false');
    await expect(page.locator('.heroTitle')).toBeFocused();
    expect(runtimeErrors).toEqual([]);
  });
}

for (const guidePath of guidePaths) {
  for (const width of [390, 768, 1280]) {
    test(`${guidePath} guide holds at ${width}px`, async ({ page }) => {
      const runtimeErrors = collectRuntimeErrors(page);
      await page.setViewportSize({ width, height: 844 });
      await page.goto(`/compass/${guidePath}`);

      const headerBox = await page.locator('.siteHeader').boundingBox();
      expect(headerBox.height).toBeLessThanOrEqual(64);
      await expectNoHorizontalOverflow(page);
      await expect(page.locator('details[open]')).toHaveCount(1);

      const firstSummaryBox = await page
        .locator('summary')
        .first()
        .boundingBox();
      expect(firstSummaryBox.height).toBeGreaterThanOrEqual(44);
      expect(firstSummaryBox.height).toBeLessThanOrEqual(56);
      expect(firstSummaryBox.y).toBeLessThanOrEqual(844);
      const columnCount = await page
        .locator('.topicDisclosure[open] .topicEssentials')
        .evaluate(
          element =>
            getComputedStyle(element).gridTemplateColumns.split(' ').length
        );
      expect(columnCount).toBe(width === 1280 ? 3 : 1);

      await expect(page.locator('.sources')).toBeVisible();
      const bodyBox = await page.locator('.topicDisclosureList').boundingBox();
      const sourcesBox = await page.locator('.sources').boundingBox();
      expect(Math.abs(bodyBox.x - sourcesBox.x)).toBeLessThanOrEqual(1);
      expect(runtimeErrors).toEqual([]);
    });
  }
}

for (const width of [390, 1280]) {
  test(`topic hashes preserve state, focus, and history at ${width}px`, async ({
    page,
  }) => {
    const runtimeErrors = collectRuntimeErrors(page);
    await page.setViewportSize({ width, height: 844 });
    await page.emulateMedia({ reducedMotion: 'reduce' });
    await page.goto('/compass/academic-stress');
    await expect(page).not.toHaveURL(/#/);

    await page.getByText('Time Management', { exact: true }).click();
    await expect(page).toHaveURL(/#timeSection$/);
    await expect(page.locator('details[open]')).toHaveCount(1);
    await expect(page.locator('#timeSection')).toHaveAttribute('open', '');
    await expect(page.locator('#timeSection summary')).toBeFocused();

    const headerBottom = await page
      .locator('.siteHeader')
      .evaluate(element => Math.round(element.getBoundingClientRect().bottom));
    await expect
      .poll(() =>
        page
          .locator('#timeSection')
          .evaluate(element => Math.round(element.getBoundingClientRect().top))
      )
      .toBeGreaterThanOrEqual(headerBottom);
    await expect
      .poll(async () => {
        const targetTop = await page
          .locator('#timeSection')
          .evaluate(element => Math.round(element.getBoundingClientRect().top));
        return targetTop - headerBottom;
      })
      .toBeLessThanOrEqual(20);

    await page.goBack();
    await expect(page).not.toHaveURL(/#/);
    await expect(page.locator('#procrastinationSection')).toHaveAttribute(
      'open',
      ''
    );
    await expect(page.locator('#procrastinationSection summary')).toBeFocused();

    await page.goForward();
    await expect(page).toHaveURL(/#timeSection$/);
    await expect(page.locator('#timeSection')).toHaveAttribute('open', '');
    await expect(page.locator('#timeSection summary')).toBeFocused();

    await page.goto('/compass/academic-stress#not-a-real-topic');
    await expect(page.locator('#timeSection')).toHaveAttribute('open', '');
    expect(runtimeErrors).toEqual([]);
  });
}

for (const width of [320, 390, 768]) {
  test(`active hashed guide navigation restores heading focus at ${width}px`, async ({
    page,
  }) => {
    await page.setViewportSize({ width, height: 844 });
    await page.emulateMedia({ reducedMotion: 'reduce' });
    await page.goto('/compass/academic-stress#timeSection');

    const menuButton = page.getByRole('button', { name: 'Menu' });
    await menuButton.click();
    await page
      .getByRole('link', { name: 'Academic Stress', exact: true })
      .click();

    await expect(page).not.toHaveURL(/#/);
    await expect(menuButton).toHaveAttribute('aria-expanded', 'false');
    await expect(page.locator('.guideTitle')).toBeFocused();
    await expect(page.locator('#procrastinationSection')).toHaveAttribute(
      'open',
      ''
    );
  });
}

test('cross-route hashes focus the disclosure summary', async ({ page }) => {
  const runtimeErrors = collectRuntimeErrors(page);
  await page.setViewportSize({ width: 390, height: 844 });
  await page.emulateMedia({ reducedMotion: 'reduce' });
  await page.goto('/compass/');

  await page.evaluate(() => {
    window.history.pushState({}, '', '/compass/academic-stress#timeSection');
    window.dispatchEvent(new PopStateEvent('popstate'));
  });
  await expect(page.locator('#timeSection')).toHaveAttribute('open', '');
  await expect(page.locator('#timeSection summary')).toBeFocused();

  await page.goto('/compass/academic-stress#[');
  await expect(
    page.getByRole('heading', { name: 'Academic Stress', level: 1 })
  ).toBeVisible();
  expect(runtimeErrors).toEqual([]);
});

for (const { path, topicId } of [
  { path: 'emotional-wellbeing', topicId: 'lowMoodSection' },
  { path: 'social-challenges', topicId: 'roommateSection' },
  { path: 'life-balance', topicId: 'moneySection' },
]) {
  test(`${path} supports direct topic hashes`, async ({ page }) => {
    await page.setViewportSize({ width: 390, height: 844 });
    await page.emulateMedia({ reducedMotion: 'reduce' });
    await page.goto(`/compass/${path}#${topicId}`);

    await expect(page.locator(`#${topicId}`)).toHaveAttribute('open', '');
    await expect(page.locator(`#${topicId} summary`)).toBeFocused();
  });
}
