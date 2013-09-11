define(['form/Form'], function(Form) {
  describe('Form module', function() {
    var formControl,
      SETTINGS = {
        templatePath: '/base/app/scripts/',
        version: '20130911'
      };

    beforeEach(function() {
      formControl = new Form($('<div id="form"></div>'), {
        SETTINGS: SETTINGS
      });
    });

    afterEach(function() {
      $('#form').remove();
    });

    it('should have init function', function() {
      expect(formControl.init).toBeDefined();
    });

    it('should render template', function() {
      expect(formControl.element.find('span').text()).toEqual('Test name');
    });
  });
});