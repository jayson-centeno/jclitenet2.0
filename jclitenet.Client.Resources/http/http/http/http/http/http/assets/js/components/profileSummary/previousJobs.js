/// <reference path="../../interfaces/interfaces.d.ts" />
/// <reference path="../../typings/react/react-global.d.ts" />
/// <reference path="../../typings/require/require.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", 'react'], function (require, exports, React) {
    "use strict";
    var PreviousJobs = (function (_super) {
        __extends(PreviousJobs, _super);
        function PreviousJobs(props) {
            _super.call(this, props);
        }
        PreviousJobs.prototype.render = function () {
            return (React.createElement("div", {className: "label-group"}, React.createElement("span", {className: "caption"}, "Previous: "), React.createElement("div", {className: "wrapper"}, React.createElement("span", null, this.props.jobs))));
        };
        return PreviousJobs;
    }(React.Component));
    return PreviousJobs;
});
