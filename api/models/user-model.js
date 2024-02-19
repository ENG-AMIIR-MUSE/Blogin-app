import mongoose from "mongoose";

const userSchema = mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email:{
      type:String, 
      require:true,
      unique:true
    },
    password: {
      type: String,
     
    },
    photoUrl:{
      type:String,
      default:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKEAAACUCAMAAADMOLmaAAAAMFBMVEXk5ueutLeqsLPQ1NXn6erh4+THy823vL+zuLzBxsjc3+C6v8LZ3N3q7O3U19m+w8XOgGfbAAADnUlEQVR4nO2b23LjIAxADYiLMZj//9sFx22zGacBZEueXc5L0zydERbISJmmwWAwGAwGg8FgMBgMBv83ANOkM49PdwPi5JWZ05JJs1E+f3EvwiyEkFJslD9u9veJZAxG7G5PSOmMvoUj6PnA7yHpzMTuCJN5o7cHUjE7QrC/CRbHhXWpQX3w21gZFVONoJCGyw+WKsGiyBNFXSuYFWcOxeoIckUR5gbBjKJWrMviZwKxom70ywc1rSC4ZkNBmi3ta1wIhIa6I4R5nemCCL9WC2+RhMdfl6AQlsqvM4SCcFPsegpFqcRo/GDtFMyKmkax8bx7NiQ6nnsXOeNI3lFDdwhzED2BYH8mFyiyOVqEIMnhHDEhFBT7TXvd9Ywl2G/6d8OCuz5VQKEMCUowMP+4oVyH4TC8gSFBptx/t8Ht2IKguPEoQUdw6sHtK4eIiiFF9YVLZpL30du/BeAKRJpuX10H4DCENG+jiD2bZpF77+YKRLciE8y9hnTX7Xe/nWvuVOxIwo5F59lMeNXedTNCULw+K3akM1Ui73QcfUS3m180rzNlI2BXXNoEOZqjLbd0PA1mX58tcmFp0kP1+SwTh1+hco5AzlyCmZqM5hsVKUTlPk0EWc88tKR/r7jlDabTILzddqRI/H5TGdhc09H0nBQz9fTFW2DS6mVCTUqrNP9o3xMQp9Usi804uySzQryT3gOAHEuf0dvHW7EJ6W2OeKf8exNPiFH7VRkzL9Ztz982pmttGShWQTMvNoBXs3XuZ4r4r1zJ3zm3mMATyvzIBZPkgdmBqjWrJ87rOOXYvZsgPpR0yXiqBc9rtrbV11+ajmSHBAjmU7Hw3lGk9WJHKIcw5h5bCnflgDZMCqW3S0pzUT0G8fXs7XZ08yUlT+h+/I44/QcD4Puvhg+R7tw3/HjGA/hKOu+sAX/SA/iCVCcJRmQ39BfFdMbTCIhRuc9Y/HsC6GtW+BtswoA/dY85QqHaVLBe7Ye8FoNwuZ9AXS1iBwYuV6SJIEKx/nrwBPp6QYSCXffw8eRS4RPN9RhuHreD5n4Qbqqmg9ZsaeyWnKLY1LPq+w0PEtsURMo8/qYhn8nT5EFDCx83ct1N/abIFMKGX17gpuMQ1AaRoih8Q6o0TFyCtTP5HvXzDhR176dUdeuhYV0XlSuTN6oeRPoj+Yeqw5ltr9kMa6aGNKehqKnB+HbDQvp8rOTCi5Oagy8oTqqm14CVGsPBYDC4gD/svjCPzgId1wAAAABJRU5ErkJggg=="
    }
  },
  { timestamps: true }
);
// add timestamps true    so to track the time that ueer created and to sort easily
export const userModel  = mongoose.model("User",userSchema)