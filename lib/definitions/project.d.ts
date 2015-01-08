interface IProjectService {
	createProject(projectName: string): IFuture<void>;
}

interface IProjectData {
	projectDir: string;
	projectName: string;
	platformsDir: string;
	projectFilePath: string;
	projectId?: string;
	projectLibs: string[];
}

interface IProjectDataService {
	initialize(projectDir: string): void;
	getValue(propertyName: string): IFuture<any>;
	setValue(key: string, value: any): IFuture<void>;
}

interface IProjectTemplatesService {
	defaultTemplatePath: IFuture<string>;
}

interface IPlatformProjectService {
	platformData: IPlatformData;
	validate(): IFuture<void>;
	createProject(projectRoot: string, frameworkDir: string): IFuture<void>;
	interpolateData(projectRoot: string): IFuture<void>;
	afterCreateProject(projectRoot: string): IFuture<void>;
	prepareProject(platformData: IPlatformData): IFuture<string>;
	buildProject(projectRoot: string): IFuture<void>;
	isPlatformPrepared(projectRoot: string): IFuture<boolean>;
	/**
	 * For android we may have two different lib types:
	 * - A Library Project, containing resources
	 * - A simple *.jar package
	 * So, we will check the path and if it is a directory we will assume the first type, otherwise - a simple jar package
	 * */
	addLib(projectRoot: string, path: string): IFuture<void>;
}
