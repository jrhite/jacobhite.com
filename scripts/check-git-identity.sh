#!/bin/sh
# Every commit in this repo is authored and committed as jrhite's GitHub
# noreply address, so the public history never carries a personal inbox.
# GitHub still attributes the commits to @jrhite via the noreply address.
#
#   check-git-identity.sh               check the identity the next commit will use
#   check-git-identity.sh <rev-range>   check every commit in the range
#
# Called from .githooks/pre-commit, .githooks/pre-push and CI.

EXPECTED_NAME='Jacob Hite'
EXPECTED_EMAIL='1085644+jrhite@users.noreply.github.com'
EXPECTED="$EXPECTED_NAME <$EXPECTED_EMAIL>"

fail() {
  echo "git identity: $1" >&2
  echo "  expected: $EXPECTED" >&2
  echo "  fix:      git config user.name '$EXPECTED_NAME' && git config user.email '$EXPECTED_EMAIL'" >&2
  exit 1
}

if [ $# -eq 0 ]; then
  for role in AUTHOR COMMITTER; do
    # `git var` returns "Name <email> timestamp tz"; strip the timestamp.
    ident=$(git var "GIT_${role}_IDENT" | sed 's/ [0-9]* [-+][0-9]*$//')
    [ "$ident" = "$EXPECTED" ] || fail "$(echo "$role" | tr 'A-Z' 'a-z') would be '$ident'"
  done
  exit 0
fi

bad=$(git log --format='%h  author: %an <%ae>  committer: %cn <%ce>' "$@" |
  grep -v -F "author: $EXPECTED  committer: $EXPECTED" || true)
[ -z "$bad" ] || fail "commits with the wrong identity:
$bad"
