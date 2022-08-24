import { NexusGenObjects } from "./../../nexus-typegen";
import { extendType, objectType } from "nexus";

export const Link = objectType({
  name: "Link",
  definition(t) {
    t.nonNull.id("id");
    t.nonNull.string("description");
    t.nonNull.string("url");
  },
});

let links: NexusGenObjects["Link"][] = [
  {
    id: "1",
    description: "this is the first link",
    url: "fakeUrl.com",
  },
  {
    id: "2",
    description: "this is the second link",
    url: "fakeUrl2.com",
  },
];

export const LinkQuery = extendType({
  type: "Query",
  definition(t) {
    t.nonNull.list.nonNull.field("feed", {
      type: "Link",
      resolve() {
        return links;
      },
    });
  },
});
