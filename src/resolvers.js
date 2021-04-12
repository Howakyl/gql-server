import { Cat } from './models/Cat';

export const resolvers = {
  Query: {
    hello: () => "YO",
    cats: () => Cat.find()
  },
  Mutation: {
    createCat: async (_, {name}) => {
      const kitty = new Cat({ name });
      await kitty.save();
      return kitty;
    },
    deleteCat: async (_, {id}) => {
      await Cat.findByIdAndDelete(id);
      return true;
    }
  }
}

