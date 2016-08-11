$(function() {

  describe('RSS Feeds', function() {

    it('are defined', function() {
      expect(allFeeds).toBeDefined();
      expect(allFeeds.length).not.toBe(0);
    });

    it('should have a URL defined and URL is not empty', function () {
     allFeeds.forEach(function (feed) {
       expect(feed.url).toBeDefined();
       expect(feed.url).not.toBe(0);
       expect(feed.url).not.toEqual('');
     });
    });

    it('should have a name defined and name is not empty', function () {
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

    it('should have at least one .entry element within the .feed container', function () {
      var $entry = $('.entry');
      var $feed = $('.feed');
      expect($feed.has($entry).length).not.toBe(true);
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
        loadFeed(1, function() {
          done();
        });
      });
    });

    it('should change content when a new feed is loaded', function (done) {
      var newContent = $('.entry').first().text();
      expect(oldContent !== newContent).toBe(true);
      done();
    });

  });
}());
