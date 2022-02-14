#!/bin/sh
set -euxo pipefail 
semgrep-agent --baseline-ref main --publish-token $SEMGREP_TOKEN