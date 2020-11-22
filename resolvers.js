const resolvers = {
  Query: {
    async getSlugs(root, args, { models }) {
      return models.Slug.findAll();
    },

    async getSlug(root, { id }, { models }) {
      return models.Slug.findById(id);
    }
  },
  Mutation: {
    async createSlug(root, { name, baseUrl, shortenedUrl }, { models }) {
      return models.Slug.create({
        name,
        baseUrl
      });
    }
  }
};

module.exports = resolvers;
