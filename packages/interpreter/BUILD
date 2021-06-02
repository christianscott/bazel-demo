load("@build_bazel_rules_nodejs//:index.bzl", "js_library")
load("@npm//@bazel/typescript:index.bzl", "ts_project")

ts_project(
    name = "interpreter_ts",
    srcs = [":index.ts"],
    deps = ["//packages/parser:lib"],
    tsconfig = "//:tsconfig.json",
    declaration = True,
    declaration_map = True,
)

js_library(
    name = "lib",
    package_name = "@packages/interpreter",
    deps = [":interpreter_ts"],
    visibility = ["//:__subpackages__"]
)
