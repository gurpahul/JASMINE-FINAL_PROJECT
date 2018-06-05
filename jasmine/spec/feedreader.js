$(function () {

    describe('RSS Feeds', function () {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined', function () {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */

        it('Has URL defined and URL is not empty', function () {
            for (feeds of allFeeds) {
                expect(feeds.name).toBeDefined();
                expect(feeds.name.length).not.toBe(0);
            }
        })

        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
        it('Has name defined and they are not empty', function () {
            for (feedsInfo of allFeeds) {
                expect(feeds.name).toBeDefined();
                expect(feeds.name.length).not.toBe(0);
            }

        })

    });


    /* TODO: Write a new test suite named "The menu" */
    describe('The menu', function () {
        const body = document.querySelector('body')
        const menu = document.querySelector('.menu-hidden')
        /* TODO: Write a test that ensures the menu element is
         * hidden by default. You'll have to analyze the HTML and
         * the CSS to determine how we're performing the
         * hiding/showing of the menu element.
         */
        it('menu element is hidden by default', function () {
            expect(body.className).toBe("menu-hidden")
        })

        let menu1 = document.querySelector('.menu-icon-link')

        it('to check visibility on click', function () {
            menu1.click();
            expect(body.classList.contains("menu-hidden")).toBe(false);
            menu1.click();
            expect(body.classList.contains("menu-hidden")).toBe(true);

        })
        //          /* TODO: Write a test that ensures the menu changes
        //           * visibility when the menu icon is clicked. This test
        //           * should have two expectations: does the menu display when
        //           * clicked and does it hide when clicked again.
        //           */

    })

    describe("Initial Entries", function () {



        beforeEach(function (done) {
            loadFeed(1, function () {
                done();
            })
        })

        it("Ensure that the function works completely when called,also there is at least a single .entry element within the .feed container.", function (done) {
            const feed1 = document.querySelector(".feed")
            const entry1 = document.querySelector(".entry")

            expect(feed1.textContent).not.toBe("")
            expect(entry1.innerHTML).not.toBe("")
            done()
        })
    })
    /* TODO: Write a new test suite named "Initial Entries" */

    /* TODO: Write a test that ensures when the loadFeed
     * function is called and completes its work, there is at least
     * a single .entry element within the .feed container.
     * Remember, loadFeed() is asynchronous so this test will require
     * the use of Jasmine's beforeEach and asynchronous done() function.
     */

    describe("New Feed Selection", function () {
        let oldFeed;
        let newFeed;

        beforeEach(function (done) {
            loadFeed(1, function () {

            })
        })

    })
    /* TODO: Write a new test suite named "New Feed Selection" */

    /* TODO: Write a test that ensures when a new feed is loaded
     * by the loadFeed function that the content actually changes.
     * Remember, loadFeed() is asynchronous.
     */
}());