import "vue-router";

type Layout = "default" | "docs";

declare module "vue-router" {
    interface RouteMeta {
        layout: Layout;
    }
}