import { page } from '@vitest/browser/context';
import { describe, expect, it } from 'vitest';
import { render } from 'vitest-browser-svelte';
import Page from './+page.svelte';

describe('/+page.svelte', () => {
	it('should render mathml', async () => {
		render(Page);

		const mathml = page.getByRole('math').first().element().innerHTML.replaceAll('<!---->', '');
		expect(mathml).toMatchInlineSnapshot(
			`"<mrow><mn>2</mn> <mo>·</mo> <msub><mi>e</mi> <mi>x</mi></msub> <mo>+</mo> <mrow><mo fence="true" form="prefix">(</mo> <msub><mi>e</mi> <mi>y</mi></msub> <mo>-</mo> <mfrac><mi>w</mi> <mn>2</mn></mfrac> <mo fence="true" form="postfix">)</mo></mrow></mrow>"`
		);
	});
});
