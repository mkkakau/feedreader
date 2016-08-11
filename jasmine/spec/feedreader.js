$(function() {

  describe('RSS Feeds', function() {

    it('are defined', function() {
      expect(allFeeds).toBeDefined();
      expect(allFeeds.length).not.toBe(0);
    });

    it('have a URL defined and URL is not empty', function () {
     allFeeds.forEach(function (feed) {
       expect(feed.url).toBeDefined();
       expect(feed.url).not.toBe(0);
     });
    });

    it('have a name defined and name is not empty', function () {
      allFeeds.forEach(function (feed) {
        expect(feed.name).toBeDefined();
        expect(feed.name).not.toBe(0);
      });
    });
  });

  describe('The menu', function () {
    it('is hidden by default', function () {
      var $body = $('body');
      expect($body.hasClass('menu-hidden')).toBe(true);
    });

    it('changes visibility when the menu icon is clicked', function () {
      var $body = $('body');
      var $menuIcon = $('.menu-icon-link');
      
      $menuIcon.trigger('click');

      expect($body.hasClass('menu-hidden')).toBe(false);

      $menuIcon.trigger('click');

      expect($body.hasClass('menu-hidden')).toBe(true);
    });

  });

       /* TODO: Write a test that ensures the menu changes
        * visibility when the menu icon is clicked. This test
        * should have two expectations: does the menu display when
        * clicked and does it hide when clicked again.
        */

  /* TODO: Write a new test suite named "Initial Entries" */

      /* TODO: Write a test that ensures when the loadFeed
       * function is called and completes its work, there is at least
       * a single .entry element within the .feed container.
       * Remember, loadFeed() is asynchronous so this test will require
       * the use of Jasmine's beforeEach and asynchronous done() function.
       */

  /* TODO: Write a new test suite named "New Feed Selection"

      /* TODO: Write a test that ensures when a new feed is loaded
       * by the loadFeed function that the content actually changes.
       * Remember, loadFeed() is asynchronous.
       */
}());
