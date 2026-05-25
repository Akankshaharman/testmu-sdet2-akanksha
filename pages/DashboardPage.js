class DashboardPage {

    constructor(page) {
        this.page = page;

        this.inventoryTitle = '.title';
        this.cartIcon = '.shopping_cart_link';
    }

    async verifyDashboardLoaded() {
        await this.page.waitForSelector(this.inventoryTitle);
    }

    async clickCart() {
        await this.page.click(this.cartIcon);
    }
}

module.exports = DashboardPage;