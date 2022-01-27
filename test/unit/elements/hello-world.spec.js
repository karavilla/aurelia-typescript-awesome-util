define(["require", "exports", "aurelia-testing", "aurelia-bootstrapper"], function (require, exports, aurelia_testing_1, aurelia_bootstrapper_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    describe('hello-world element', function () {
        var component;
        afterEach(function () {
            if (component) {
                component.dispose();
                component = null;
            }
        });
        it('says hello world with message', function (done) {
            var model = { message: 'from me' };
            component = aurelia_testing_1.StageComponent
                .withResources('elements/hello-world')
                .inView('<hello-world message.bind="message"></hello-world>')
                .boundTo(model);
            component.create(aurelia_bootstrapper_1.bootstrap).then(function () {
                var view = component.element;
                expect(view.textContent.trim()).toBe('Hello world from me');
                done();
            }).catch(function (e) {
                fail(e);
                done();
            });
        });
    });
});
//# sourceMappingURL=hello-world.spec.js.map