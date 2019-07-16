

export class LoggingService{
    logStatusChange(newStatus: string){
        console.log('A server status changed. New status: ' + newStatus);
    }
}