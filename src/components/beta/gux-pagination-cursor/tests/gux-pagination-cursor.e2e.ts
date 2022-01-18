import { E2EPage } from '@stencil/core/testing';
import { newSparkE2EPage, a11yCheck } from '../../../../../tests/e2eTestUtils';

async function clickButton(page: E2EPage, buttonToClick: 'previous' | 'next') {
  await page.evaluate(button => {
    const element = document.querySelector('gux-pagination-cursor-beta');
    const [previousButton, nextButton] = Array.from(
      element.shadowRoot.querySelectorAll('button')
    );

    if (button === 'next') {
      nextButton.click();
    } else {
      previousButton.click();
    }
  }, buttonToClick);
}

describe('gux-pagination-cursor-beta', () => {
  describe('#render', () => {
    [
      '<gux-pagination-cursor-beta lang="en"></gux-pagination-cursor-beta>',
      '<gux-pagination-cursor-beta lang="en" has-next></gux-pagination-cursor-beta>',
      '<gux-pagination-cursor-beta lang="en" has-previous has-next></gux-pagination-cursor-beta>',
      '<gux-pagination-cursor-beta lang="en" has-previous></gux-pagination-cursor-beta>'
    ].forEach((html, index) => {
      it(`should render as expected (${index + 1})`, async () => {
        const page = await newSparkE2EPage({ html });
        const element = await page.find('gux-pagination-cursor-beta');
        await a11yCheck(page);

        expect(element.outerHTML).toMatchSnapshot();
      });
    });
  });

  describe('guxpaginationcursorchange', () => {
    it('should fire guxpaginationcursorchange(previous) event when enabled previous button is clicked', async () => {
      const html =
        '<gux-pagination-cursor-beta lang="en" has-previous></gux-pagination-cursor-beta>';
      const page = await newSparkE2EPage({ html });
      const guxPaginationCursorchangeSpy = await page.spyOnEvent(
        'guxpaginationcursorchange'
      );

      await clickButton(page, 'previous');
      await page.waitForChanges();

      expect(guxPaginationCursorchangeSpy).toHaveReceivedEventDetail(
        'previous'
      );
    });

    it('should fire guxpaginationcursorchange(next) event when enabled next button is clicked', async () => {
      const html =
        '<gux-pagination-cursor-beta lang="en" has-next></gux-pagination-cursor-beta>';
      const page = await newSparkE2EPage({ html });
      const guxPaginationCursorchangeSpy = await page.spyOnEvent(
        'guxpaginationcursorchange'
      );

      await clickButton(page, 'next');
      await page.waitForChanges();

      expect(guxPaginationCursorchangeSpy).toHaveReceivedEventDetail('next');
    });

    it('should not fire guxpaginationcursorchange(previous) event when disabled previous button is clicked', async () => {
      const html =
        '<gux-pagination-cursor-beta lang="en"></gux-pagination-cursor-beta>';
      const page = await newSparkE2EPage({ html });
      const guxPaginationCursorchangeSpy = await page.spyOnEvent(
        'guxpaginationcursorchange'
      );

      await clickButton(page, 'previous');
      await page.waitForChanges();
      await page.waitForChanges();

      expect(guxPaginationCursorchangeSpy).not.toHaveReceivedEvent();
    });

    it('should not fire guxpaginationcursorchange(next) event when disabled next button is clicked', async () => {
      const html =
        '<gux-pagination-cursor-beta lang="en"></gux-pagination-cursor-beta>';
      const page = await newSparkE2EPage({ html });
      const guxPaginationCursorchangeSpy = await page.spyOnEvent(
        'guxpaginationcursorchange'
      );

      await clickButton(page, 'next');
      await page.waitForChanges();

      expect(guxPaginationCursorchangeSpy).not.toHaveReceivedEvent();
    });
  });
});
