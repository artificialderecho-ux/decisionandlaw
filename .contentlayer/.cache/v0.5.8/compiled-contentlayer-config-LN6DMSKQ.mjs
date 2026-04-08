// contentlayer.config.ts
import { defineDocumentType, makeSource } from "contentlayer2/source-files";
var Article = defineDocumentType(() => ({
  name: "Article",
  filePathPattern: "articles/**/*.mdx",
  contentType: "mdx",
  fields: {
    title: { type: "string", required: true },
    slug: { type: "string", required: true },
    date: { type: "date", required: true },
    lastModified: { type: "date", required: false },
    seoTitle: { type: "string", required: false },
    metaDescription: { type: "string", required: false },
    ogTitle: { type: "string", required: false },
    ogDescription: { type: "string", required: false },
    ogImage: { type: "string", required: false },
    category: { type: "string", required: true },
    subcategory: { type: "string", required: false },
    topics: { type: "list", of: { type: "string" }, required: false },
    jurisdiction: { type: "string", required: false },
    court: { type: "string", required: false },
    status: { type: "string", required: false },
    author: { type: "string", default: "Decision & Law Editorial Team" },
    authorSlug: { type: "string", default: "editorial-team" },
    readingTime: { type: "number", required: false },
    wordCount: { type: "number", required: false },
    caseName: { type: "string", required: false },
    caseNumber: { type: "string", required: false },
    judge: { type: "string", required: false },
    filingDate: { type: "date", required: false },
    trialDate: { type: "date", required: false },
    aiTool: { type: "string", required: false },
    keyIssue: { type: "string", required: false },
    relatedCases: { type: "list", of: { type: "string" }, required: false },
    relatedStates: { type: "list", of: { type: "string" }, required: false },
    featured: { type: "boolean", default: false },
    breaking: { type: "boolean", default: false },
    premium: { type: "boolean", default: false },
    newsletter: { type: "boolean", default: false }
  },
  computedFields: {
    url: {
      type: "string",
      resolve: (doc) => `/news/${doc.slug}`
    }
  }
}));
var contentlayer_config_default = makeSource({
  contentDirPath: "content",
  documentTypes: [Article],
  disableImportAliasWarning: true
});
export {
  Article,
  contentlayer_config_default as default
};
//# sourceMappingURL=compiled-contentlayer-config-LN6DMSKQ.mjs.map
