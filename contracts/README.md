(base) JessiedeMacBook-Pro:BlackJack-master jessieliu$ truffle migrate

Compiling your contracts...
===========================
> Compiling ./contracts/BlackJack.sol
> Compiling ./contracts/Migrations.sol
> Compiling ./contracts/SimpleStorage.sol
> Artifacts written to /Users/jessieliu/Desktop/BlackJack-master/client/src/contracts
> Compiled successfully using:
   - solc: 0.5.16+commit.9c3226ce.Emscripten.clang



Starting migrations...
======================
> Network name:    'development'
> Network id:      5777
> Block gas limit: 6721975 (0x6691b7)


1_initial_migration.js
======================

   Deploying 'Migrations'
   ----------------------
   > transaction hash:    0x4f0cc3850f68149963b5fed6136f6a87d771fece89422dec1299997383b44803
   > Blocks: 0            Seconds: 0
   > contract address:    0x3A5b7F4098B969C16A33aF5687FEe3342d5aF7BB
   > block number:        1
   > block timestamp:     1618763903
   > account:             0x65Ef3C461a8E57924117d678a880760503d91F97
   > balance:             99.99671674
   > gas used:            164163 (0x28143)
   > gas price:           20 gwei
   > value sent:          0 ETH
   > total cost:          0.00328326 ETH


   > Saving migration to chain.
   > Saving artifacts
   -------------------------------------
   > Total cost:          0.00328326 ETH


2_deploy_contracts.js
=====================

   Deploying 'SimpleStorage'
   -------------------------
   > transaction hash:    0xeee4096658fea8c1484c25a35c8e9cdf2a31b185fc1e27d0000d30c4527428d6
   > Blocks: 0            Seconds: 0
   > contract address:    0x9891A8f8a1B1e1D23797be90013f1AF7cE913bf1
   > block number:        3
   > block timestamp:     1618763903
   > account:             0x65Ef3C461a8E57924117d678a880760503d91F97
   > balance:             99.99394638
   > gas used:            96177 (0x177b1)
   > gas price:           20 gwei
   > value sent:          0 ETH
   > total cost:          0.00192354 ETH


   > Saving migration to chain.
   > Saving artifacts
   -------------------------------------
   > Total cost:          0.00192354 ETH


Summary
=======
> Total deployments:   2
> Final cost:          0.0052068 ETH


(base) JessiedeMacBook-Pro:BlackJack-master jessieliu$ truffle test
Using network 'development'.


Compiling your contracts...
===========================
> Compiling ./test/TestSimpleStorage.sol
> Artifacts written to /var/folders/wv/58nktq9d6_x6y6c9bkck1kd00000gn/T/test--22117-X2cCD53kQW1a
> Compiled successfully using:
   - solc: 0.5.16+commit.9c3226ce.Emscripten.clang



  TestSimpleStorage
    ✓ testItStoresAValue (94ms)

  Contract: SimpleStorage
    ✓ ...should store the value 89. (121ms)


  2 passing (7s)
  
  
  
  (base) JessiedeMacBook-Pro:client jessieliu$ truffle migrate --reset

  Compiling your contracts...
  ===========================
  > Compiling ./contracts/HelloWorld.sol
  > Artifacts written to /Users/jessieliu/Desktop/BlackJack-master/client/src/contracts
  > Compiled successfully using:
     - solc: 0.5.16+commit.9c3226ce.Emscripten.clang



  Starting migrations...
  ======================
  > Network name:    'development'
  > Network id:      5777
  > Block gas limit: 6721975 (0x6691b7)


  1_initial_migration.js
  ======================

     Replacing 'Migrations'
     ----------------------
     > transaction hash:    0x26d07357d6628261bc96291277a5b645e0b19994e96007e0ea727bc9b31b9622
     > Blocks: 0            Seconds: 0
     > contract address:    0xBb9d9ff88E93228E16b8fAc8804261EF551Cd068
     > block number:        20
     > block timestamp:     1618774441
     > account:             0x65Ef3C461a8E57924117d678a880760503d91F97
     > balance:             99.90639662
     > gas used:            164163 (0x28143)
     > gas price:           20 gwei
     > value sent:          0 ETH
     > total cost:          0.00328326 ETH


     > Saving migration to chain.
     > Saving artifacts
     -------------------------------------
     > Total cost:          0.00328326 ETH


  2_deploy_contracts.js
  =====================

     Replacing 'BlackJack'
     ---------------------
     > transaction hash:    0x9c42fe9a82131bd002ad9638026a19d0dec9844288ff01b8e8b46d1a88968e76
     > Blocks: 0            Seconds: 0
     > contract address:    0xAfe97BfBBde58eC9d6c1A6b527Cb762F25005aB1
     > block number:        22
     > block timestamp:     1618774441
     > account:             0x65Ef3C461a8E57924117d678a880760503d91F97
     > balance:             99.83846588
     > gas used:            3354196 (0x332e54)
     > gas price:           20 gwei
     > value sent:          0 ETH
     > total cost:          0.06708392 ETH


     Deploying 'HelloWorld'
     ----------------------
     > transaction hash:    0xf979aa1be09291212d984ebde2323217dc28c23d3a48026dad6c8b1c35a348a9
     > Blocks: 0            Seconds: 0
     > contract address:    0x82fca136f2aCFF6eBb84A52ABE6d053C337F426B
     > block number:        23
     > block timestamp:     1618774442
     > account:             0x65Ef3C461a8E57924117d678a880760503d91F97
     > balance:             99.83520326
     > gas used:            163131 (0x27d3b)
     > gas price:           20 gwei
     > value sent:          0 ETH
     > total cost:          0.00326262 ETH


     Replacing 'SimpleStorage'
     -------------------------
     > transaction hash:    0xef20e2c272417cc5a203b590ea08e4ec046bd51a7031a8cd627651dfe6e19cfd
     > Blocks: 0            Seconds: 0
     > contract address:    0x6A719eb45c6fF632b76e9213351afFDD82984bB8
     > block number:        24
     > block timestamp:     1618774442
     > account:             0x65Ef3C461a8E57924117d678a880760503d91F97
     > balance:             99.83327972
     > gas used:            96177 (0x177b1)
     > gas price:           20 gwei
     > value sent:          0 ETH
     > total cost:          0.00192354 ETH


     > Saving migration to chain.
     > Saving artifacts
     -------------------------------------
     > Total cost:          0.07227008 ETH


  Summary
  =======
  > Total deployments:   4
  > Final cost:          0.07555334 ETH
