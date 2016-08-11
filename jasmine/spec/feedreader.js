$(function() {

  describe('RSS Feeds', function() {

    it('are defined', function() {
      expect(allFeeds).toBeDefined();
      expect(allFeeds.length).not.toBe(0);
    });

    it('should have a URL defined and URL is not empty', function () {
     allFeeds.forEach(function (feed) {
       expect(feed.url).toBeDefined();
       expect(feed.url.length).toBeGreaterThan(0);
     });
    });

    it('should have a name defined and name is not empty', function () {
      allFeeds.forEach(function (feed) {
        expect(feed.name).toBeDefined();
        expect(feed.name.length).toBeGreaterThan(0);
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
      loadFeed(0, done);
    });

    it('should have at least one .entry element within the .feed container', function () {
      expect($('.feed .entry').length).toBeGreaterThan(0);
    });
  });

  describe('New Feed Selection', function () {
    var oldContent;

    beforeEach(function (done) {
      // Load default feed
      loadFeed(0, function () {
        // Once completed load next feed
        // Set old content to first child in feed
        oldContent = $('.entry').first().text();
        loadFeed(1, done);
      });
    });

    it('should change content when a new feed is loaded', function () {
      var newContent = $('.entry').first().text();
      expect(oldContent).not.toBe(newContent);
    });

  });
}());
