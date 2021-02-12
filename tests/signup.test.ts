// import { User, UserInputDTO } from "../src/business/entities/User";
// import { UserBusiness } from "../src/business/UserBusiness";

// describe("Testing signup", () => {
  
//   let userDatabase = {
//     createUser: jest.fn((user: User) => {}),
//   }
//   let hashManager = {
//     hash: jest.fn(() => "hash"),
//   };
//   let idGenerator = {
//     generate: jest.fn(() => "id"),
//   };
//   let authenticator = {
//     generateToken: jest.fn(() => "token"),
//   };

//   test("Should return error when name is null", async () => {
//     expect.assertions(2);

//     const userBusiness = new UserBusiness(
//       userDatabase as any,
//       idGenerator as any,
//       hashManager as any,
//       authenticator as any
//     );

//     try {
//       const userInput: UserInputDTO = {
//         email: "astrodev@email.com",
//         password: "12345678",
//         name: "",
//         role: "ADMIN",
//       };

//       await userBusiness.createUser(userInput);
//     } catch (error) {
//       expect(error.code).toBe(422);
//       expect(error.message).toEqual("Missing input");
//     }
//   });

//   test("Should return an error when email is null", async () => {
//     expect.assertions(2);

//     const userBusiness = new UserBusiness(
//       userDatabase as any,
//       idGenerator as any,
//       hashManager as any,
//       authenticator as any
//     );

//     try {
//       const userInput: UserInputDTO = {
//         email: "",
//         password: "12345678",
//         name: "Astrodev",
//         role: "ADMIN",
//       };

//       await userBusiness.createUser(userInput);
//     } catch (error) {
//       expect(error.code).toBe(422);
//       expect(error.message).toEqual("Missing input");
//     }
//   });

//   test("Should return an error when password is null", async () => {
//     expect.assertions(2);

//     const userBusiness = new UserBusiness(
//       userDatabase as any,
//       idGenerator as any,
//       hashManager as any,
//       authenticator as any
//     );

//     try {
//       const userInput: UserInputDTO = {
//         email: "astrodev@email.com",
//         password: "",
//         name: "Astrodev",
//         role: "ADMIN",
//       };

//       await userBusiness.createUser(userInput);
//     } catch (error) {
//       expect(error.code).toBe(422);
//       expect(error.message).toEqual("Missing input");
//     }
//   });

//   test("Deve retornar erro ao receber um role vazio", async () => {
//     expect.assertions(2);

//     const userBusiness = new UserBusiness(
//       userDatabase as any,
//       idGenerator as any,
//       hashManager as any,
//       authenticator as any
//     );

//     try {
//       const userInput: UserInputDTO = {
//         email: "astrodev@email.com",
//         password: "12345678",
//         name: "Astrodev",
//         role: "",
//       };

//       await userBusiness.createUser(userInput);
//     } catch (error) {
//       expect(error.code).toBe(422);
//       expect(error.message).toEqual("Missing input");
//     }
//   });

//   test("Should return 'Invalid email' when @ is missing", async () => {
//     expect.assertions(2);

//     const userBusiness = new UserBusiness(
//       userDatabase as any,
//       idGenerator as any,
//       hashManager as any,
//       authenticator as any
//     );

//     try {
//       const userInput: UserInputDTO = {
//         email: "astrodev.com",
//         password: "12345678",
//         name: "Astrodev",
//         role: "ADMIN",
//       };
//       await userBusiness.createUser(userInput);
//     } catch (error) {
//       expect(error.code).toBe(422);
//       expect(error.message).toEqual("Invalid email");
//     }
//   });

//   test("Should return 'Invalid password' when password is lower than 6 characters", async () => {
//     expect.assertions(2);

//     const userBusiness = new UserBusiness(
//       userDatabase as any,
//       idGenerator as any,
//       hashManager as any,
//       authenticator as any
//     );

//     try {
//       const userInput: UserInputDTO = {
//         email: "astrodev@email.com",
//         password: "1",
//         name: "Astrodev",
//         role: "ADMIN",
//       };

//       await userBusiness.createUser(userInput);
//     } catch (error) {
//       expect(error.code).toBe(422);
//       expect(error.message).toEqual("Invalid password");
//     }
//   });

// });
