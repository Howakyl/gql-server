import { Cat } from './models/Cat';

export const resolvers = {
  Query: {
    hello: () => "YO",
    cats: () => Cat.find(),
    cat: (_, {id}) => Cat.findById(id)
  },
  Mutation: {

    createCat: async (_, {name, age}) => {
      const kitty = new Cat({ name, age });
      await kitty.save();
      return kitty;
    },

    deleteCat: async (_, {id}) => {
      await Cat.findByIdAndDelete(id);
      return true;
    },

    updateCat: async (_, {id, input}) => {
      const foundCat = await Cat.findById(id);

      if(!foundCat) console.log('no cat with this id!');
      
      Object.keys(input).forEach(value => {
        foundCat[value] = input[value];
      });

      const updatedCat = await foundCat.save();

      return updatedCat;
    }

    // ITEMS //
    
  }
}

