///<reference path="../jquery/jquery.d.ts"/>
interface Ui5Logger {
    //Allows to add a new LogListener that will be notified for new log entries.
    addLogListener(oListener)
    //Creates a new debug-level entry in the log with the given message, details and calling component.
    debug(sMessage: string, sDetails?: string, sComponent?: string)
    //Creates a new error-level entry in the log with the given message, details and calling component.
    error(sMessage: string, sDetails?: string, sComponent?: string)
    //Creates a new fatal-level entry in the log with the given message, details and calling component.
    fatal(sMessage: string, sDetails?: string, sComponent?: string)
    //Returns the log level currently effective for the given component.
    getLevel(sComponent?: string)
    //Returns the logged entries recorded so far as an array.
    getLogEntries()
    //Returns a jQuery.sap.log.Logger for the given component.
    getLogger(sComponent: string, iDefaultLogLevel?)
    //Creates a new info-level entry in the log with the given message, details and calling component.
    info(sMessage: string, sDetails?: string, sComponent?: string)
    //Checks whether logging is enabled for the given log level, depending on the currently effective log level for the given component.
    isLoggable(iLevel?, sComponent?: string)
    //Allows to remove a registered LogListener.
    removeLogListener(oListener)
    //Defines the maximum jQuery.sap.log.Level of log entries that will be recorded.
    setLevel(iLogLevel, sComponent?: string)
    //Creates a new trace-level entry in the log with the given message, details and calling component.
    trace(sMessage: string, sDetails?: string, sComponent?: string)
    //Creates a new warning-level entry in the log with the given message, details and calling component.
    warning(sMessage: string, sDetails?: string, sComponent?: string)
}

interface JquerySap {
    log: Ui5Logger
}
interface JQueryStatic {
    sap: JquerySap
}
