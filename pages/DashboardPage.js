const { expect } = require('@playwright/test');

class DashboardPage {

    constructor(page) {

        this.page = page;

        this.cartIcon = '.shopping_cart_link';

        this.inventoryContainer =
            '[data-test="inventory-container"]';
    }

    async verifyDashboardLoaded() {

        await expect(
            this.page.locator(this.inventoryContainer)
        ).toBeVisible();
    }

    async clickCart() {

        await this.page.waitForSelector(
            this.cartIcon,
            { state: 'visible' }
        );

        await this.page.locator(
            this.cartIcon
        ).click();
    }
}

module.exports = DashboardPage;