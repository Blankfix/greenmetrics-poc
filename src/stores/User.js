import { __decorate, __extends } from "tslib";
import { VuexModule, Module, Mutation, Action } from "vuex-module-decorators";
var User = /** @class */ (function (_super) {
    __extends(User, _super);
    function User() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = "";
        return _this;
    }
    User.prototype.setName = function (newName) {
        this.name = newName;
    };
    User.prototype.updateName = function (newName) {
        this.context.commit("setName", newName);
    };
    __decorate([
        Mutation
    ], User.prototype, "setName", null);
    __decorate([
        Action
    ], User.prototype, "updateName", null);
    User = __decorate([
        Module({ namespaced: true, name: "test" })
    ], User);
    return User;
}(VuexModule));
export default User;
//# sourceMappingURL=User.js.map