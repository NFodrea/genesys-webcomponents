import { E2EPage } from '@stencil/core/testing';

import { newSparkE2EPage, a11yCheck } from '../../../../../tests/e2eTestUtils';

async function clickDropdownButton(page: E2EPage): Promise<void> {
  return await page.evaluate(() => {
    const element = document.querySelector('gux-button-multi');
    const dropdownButton: HTMLButtonElement = element.shadowRoot.querySelector(
      '.gux-dropdown-button > button'
    );

    dropdownButton.click();
  });
}

describe('gux-button-multi', () => {
  const html = `
  <gux-button-multi lang="en" text="Primary" accent="primary">
    <gux-action-item text="test"></gux-action-item>
    <gux-action-item text="test2"></gux-action-item>
    <gux-action-item text="test3"></gux-action-item>
    <gux-list-divider></gux-list-divider>
    <gux-action-item><span>I am a span</span></gux-action-item>
  </gux-button-multi>
  `;

  it('renders', async () => {
    const page = await newSparkE2EPage({ html });

    const element = await page.find('gux-button-multi');
    await a11yCheck(page);
    expect(element).toHaveClass('hydrated');
  });

  it('should fire guxopen and guxclose events if not disabled', async () => {
    const page = await newSparkE2EPage({ html });
    const onGuxopen = await page.spyOnEvent('guxopen');
    const onGuxclose = await page.spyOnEvent('guxclose');

    await clickDropdownButton(page);

    await a11yCheck(page);

    await clickDropdownButton(page);

    expect(onGuxopen).toHaveReceivedEventTimes(1);
    expect(onGuxclose).toHaveReceivedEventTimes(1);
  });

  it('should not fire guxopen event if disabled', async () => {
    const page = await newSparkE2EPage({ html });
    const onGuxopen = await page.spyOnEvent('guxopen');
    const element = await page.find('gux-button-multi');
    element.setAttribute('disabled', 'disabled');
    await page.waitForChanges();

    await clickDropdownButton(page);

    await a11yCheck(page);

    expect(onGuxopen).toHaveReceivedEventTimes(0);
  });
});
