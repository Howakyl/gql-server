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
    },
    updateCat: async (_, {id, input}) => {
      const yee = await Cat.findById(id);

      if(!yee) console.log('no cat with this id!');

      Object.keys(input).forEach(value => {
        yee[value] = input[value];
      });

      const updatedCat = await yee.save();

      return updatedCat;
    }
  }
}

