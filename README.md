# Creating a Typescript Project

## Starting the TypeScript Project
To begin your TypeScript project, you will need to create a directory for your project:

```
mkdir typescript-project
```

Now change into your project directory:

```
cd typescript-project
```

With your project directory set up, you can install TypeScript:

```
npm i typescript --save-dev
```

It is important to include the --save-dev flag because it saves TypeScript as a development dependency. This means that TypeScript is absolutely required for the development of your project.

With TypeScript installed, you can initialize your TypeScript project by using the following command:

```
npx tsc --init
```

npm also includes a tool called npx, which will run executable packages. npx allows us to run packages without having to install them globally.

The tsc command is used here because it is the built-in TypeScript compiler. When you write code in TypeScript, running tsc will transform or compile your code into JavaScript.

Using the --init flag in the above command will initialize your project by creating a tsconfig.json file in your typescript-project project directory. This tsconfig.json file will allow you to configure further and customize how TypeScript and the tsc compiler interact. You can remove, add, and change configurations in this file to best meet your needs.

Open tsconfig.json in your editor:

```
nano tsconfig.json
```

You, and you will find the default configuration. There will be many options, most of which are commented out:

```
typescript-project/tsconfig.json
{
  "compilerOptions": {
    /* Visit https://aka.ms/tsconfig.json to read more about this file */

    /* Projects */
    // "incremental": true,                              /* Enable incremental compilation */
    // "composite": true,                                /* Enable constraints that allow a TypeScript project to be used with project references. */
    // "tsBuildInfoFile": "./",                          /* Specify the folder for .tsbuildinfo incremental compilation files. */
    // "disableSourceOfProjectReferenceRedirect": true,  /* Disable preferring source files instead of declaration files when referencing composite projects */
    // "disableSolutionSearching": true,                 /* Opt a project out of multi-project reference checking when editing. */
    // "disableReferencedProjectLoad": true,             /* Reduce the number of projects loaded automatically by TypeScript. */
    
    . . .
  }
}
```
You can customize your TypeScript configuration. In the tsconfig.json file. For instance, you might consider uncommenting the outDir entry and setting it to "./build", which will put all of your compiled TypeScript files into that directory.

With TypeScript installed and your tsconfig.json file in place, you can now move on to coding your TypeScript app and compiling it.