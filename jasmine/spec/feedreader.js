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

  describe('Initial Entries', function () {
    beforeEach(function (done) {
      loadFeed(0, function () {
        done();
      });
    });

    it('have at least one .entry element within the .feed container', function (done) {
      var $entry = $('.entry');
      var $feed = $('.feed');
      expect($feed.has($entry).length >= 1).toBe(true);
      done();
    });
  });

  describe('New Feed Selection', function () {

  });
  /* TODO: Write a new test suite named "New Feed Selection"

      /* TODO: Write a test that ensures when a new feed is loaded
       * by the loadFeed function that the content actually changes.
       * Remember, loadFeed() is asynchronous.
       */
}());
