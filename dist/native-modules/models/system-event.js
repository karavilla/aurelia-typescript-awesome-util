var SystemEvent = (function () {
    function SystemEvent(text, type, status) {
        this.text = text;
        this.type = type;
        if (status) {
            this.status = status;
        }
        this.timestamp = Date.now();
    }
    return SystemEvent;
}());
export default SystemEvent;
