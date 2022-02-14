#!/bin/sh
set -euxo pipefail 
semgrep-agent --baseline-ref $(git merge-base main HEAD) --publish-token $SEMGREP_TOKEN