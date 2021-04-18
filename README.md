# BlackJack
运行方式
1. 如果没有修改contracts，请直接看3。要是修改了contracts，请看2和3.
2. 现在“BlackJack-master”文件夹的终端运行 "truffle migrate --reset"(如果是第一次部署请用“truffle migrate”), 再运行 "truffle test"。
3. 在“BlackJack-master/client”文件夹的终端运行 "npm run start"。

## Back_end Contract Progress
1. All contract methods have been finished.
2. All methods are stored in "contracts/BlackJack.sol". There are a little commits, I think it can be easily read, but if you have any questions, please contact me.
3. Contract code is from “https://github.com/JayOfemi/BlackJack” that is written by Jay Ofemi on 06/23/2018.

## 后端contract说明(前端会用到的)
1. payContract() => 我觉得应该是第一个调用的函数。这个函数会initialize一些parameters。
2. placeBet(uint256 bet) => 下注的数字在这个函数里设置。
3. deal() => 在确定下注的大小之后，这个函数可以就会产生玩家的2张牌和庄家的2张牌。
4. hit() => 玩家继续要牌，则可以调用这个函数。
5. stand() => 玩家不再要牌了，这个函数就会计算游戏结果。
6. 以上函数是我已经写在contract里，我觉得必须的函数。如果在前端调用的时候，有别的需求可以再加。

## Front-end Design
1. 前端的所有文件都在“client”文件夹里。
2. 前端只需要继续修改App.js就可以了。
3. “runExample”之前将React和Contract连接起来的部分已完成，不再需要修改。
4. “runExample”之后要用的是“blackJackContract”。
5. App.js中需要修改的是“runExample”和“render”中的内容。

# Good Luck！！
