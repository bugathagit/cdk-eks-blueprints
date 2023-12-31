import * as spi from "../../spi";
import { setPath } from "../../utils";

/**
 * Flux GitRepository API defines a Source to produce an Artifact for a Git repository revision.
 */
export class FluxGitRepository {

    constructor(private readonly repository: spi.ApplicationRepository) {}

    public generate(name: string, namespace: string, fluxSyncInterval: string, fluxSecretRefName: string) {

        const repository = this.repository;
        const gitManifest =  {
            apiVersion: "source.toolkit.fluxcd.io/v1beta2",
            kind: "GitRepository",
            metadata: {
                name: name,
                namespace: namespace
            },
            spec: {
                interval: fluxSyncInterval,
                url: repository.repoUrl,
                ref: {
                    branch: repository.targetRevision,
                },
            }
        };
        if (fluxSecretRefName) {
            setPath(gitManifest, "spec.secretRef.name", fluxSecretRefName);
        }
        return gitManifest;
    }
}
