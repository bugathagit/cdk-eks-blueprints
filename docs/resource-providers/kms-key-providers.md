## KMS Key Resource Providers

### CreateKmsKeyProvider
Creates a KMS Key with the optionally provided aliasName and properties and makes it available to the blueprint constructs under the provided name.

Example Implementation:
```typescript
blueprints.EksBlueprint.builder()
  .resourceProvider(GlobalResources.KmsKey, new blueprints.CreateKmsKeyProvider("alias-name"))
  ...
  .build();
```

### LookupKmsKeyProvider
Looks up a KMS Key based on the alias provided and makes it available to the blueprint constructs under the provided name.

Example Implementation:
```typescript
blueprints.EksBlueprint.builder()
  .resourceProvider(GlobalResources.KmsKey, new blueprints.LookupKmsKeyProvider("alias-name"))
  ...
  .build();
```
