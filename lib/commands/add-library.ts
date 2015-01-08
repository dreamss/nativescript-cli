///<reference path="../.d.ts"/>
"use strict";

export class AddLibraryCommand implements ICommand {
    constructor(private $platformService: IPlatformService,
                private $errors: IErrors) { }

    execute(args: string[]): IFuture<void> {
        return (() => {
            this.$platformService.addLib(args[0], args[1]).wait();
        }).future<void>()();
    }

    allowedParameters: ICommandParameter[] = [];

    canExecute(args: string[]): IFuture<boolean> {
        return (() => {
            if(!args || args.length !== 2) {
                // TODO: Better error message
                this.$errors.fail("Need two parameters - first for the platform and second for the library.");
            }

            this.$platformService.validatePlatform(args[0]);

            //_.each(args, arg => this.$platformService.validatePlatform(arg));

            return true;
        }).future<boolean>()();
    }
}
$injector.registerCommand("add-lib", AddLibraryCommand);
