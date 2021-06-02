load("@build_bazel_rules_nodejs//:index.bzl", "nodejs_binary")
load("@npm//@bazel/typescript:index.bzl", "ts_project")

ts_project(
    name = "cli_ts",
    srcs = [":cli.ts"],
    deps = ["//lang/lexer:lib", "//lang/parser:lib", "//lang/interpreter:lib"],
    tsconfig = "//:tsconfig.json",
    declaration = True,
    declaration_map = True,
)

nodejs_binary(
    name = "bin",
    data = [":cli_ts"],
    entry_point = ":cli.ts",
)
