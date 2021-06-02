load("@build_bazel_rules_nodejs//:index.bzl", "js_library")
load("@npm//@bazel/typescript:index.bzl", "ts_project")

ts_project(
    name = "parser_ts",
    srcs = [":index.ts"],
    deps = ["//lang/lexer:lib"],
    tsconfig = "//:tsconfig.json",
    declaration = True,
    declaration_map = True,
)

js_library(
    name = "lib",
    package_name = "lang/parser",
    deps = [":parser_ts"],
    visibility = ["//:__subpackages__"]
)
