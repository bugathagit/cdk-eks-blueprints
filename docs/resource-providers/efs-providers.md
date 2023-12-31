## EFS Resource Providers

### CreateEfsFileSystemProvider
Creates a new EFS file system with the provided properties and makes it available to the blueprint constructs under the provided name. Depends on a VPC resource provider.

Example Implementation:
```typescript
blueprints.EksBlueprint.builder()
  .resourceProvider(GlobalResources.Vpc, new blueprints.VpcProvider())
  .resourceProvider("efs-file-system", new blueprints.CreateEfsFileSystemProvider({name: "efs-file-system"}))
  ...
  .build();
```

### LookupEfsFileSystem
Looks for an existing EFS file system by the given name and id and makes it available to the blueprint constructs under the provided name.

Example Implementation:
```typescript
blueprints.EksBlueprint.builder()
  .resourceProvider("efs-file-system", new blueprints.LookupEfsFileSystem({name: "efs-file-system", fileSystemId: "efs-fs-id"}))
  ...
  build();
```
