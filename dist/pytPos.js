"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var pyt_merkle_sum_tree_1 = require("pyt-merkle-sum-tree");
var generateProof_1 = require("./generateProof");
var verifyProof_1 = require("./verifyProof");
/**
 * PytPos is a class that contains the core methods to let CEXs provide credible Proof Of Solvency to its users
 * while maintaining secrecy over their Business Information thanks to zkSNARKs.
 * The exchange first needs to create a Merkle Sum Tree from a csv file containing the username and balances of its users.
 * Then, it can generate a proof of solvency for a specific user using a zkSNARK.
 * The proof of solvency is generated by providing the Merkle Sum Tree, the user's index in the Merkle Sum Tree, the total assets owned by the exchange and the prover artifacts.
 * The proof doesn't reveal information such as the total balances of each users, the number of users and total amount of liabilities are not revealed to the public.
 * The PytPos class also provides methods such that the user can verify the proof of solvency.
 */
var PytPos = /** @class */ (function () {
    function PytPos() {
    }
    /**
     * Creates a Merkle Sum Tree from a csv file containing the username and balances of the users.
     * @param pathToCsv The path to the csv file containing the username and balances of the users.
     * @returns An instance of the IncrementalMerkleSumTree class.
     */
    PytPos.createMerkleSumTree = function (pathToCsv) {
        return new pyt_merkle_sum_tree_1.IncrementalMerkleSumTree(pathToCsv);
    };
    /**
     * Generates a proof of solvency for a specific user using a zkSNARK.
     * @param merkleSumTree An instance of the IncrementalMerkleSumTree class.
     * @param userIndex The index of the user in the Merkle Sum Tree.
     * @param assetsSum The total assets owned by the exchange.
     * @param proverArtifacts The prover artifacts.
     * @returns A FullProof object containing the proof of solvency. It contains the zk proof and the public signals of the proof such as the username and the balance the proof was generated for, the root hash of the Merkle Sum Tree and the assets sum.
     */
    PytPos.generateProof = function (merkleSumTree, userIndex, assetsSum, proverArtifacts) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, (0, generateProof_1.default)(merkleSumTree, userIndex, assetsSum, proverArtifacts)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * Verifies the zk proof of solvency generated for a specific user.
     * @param proof A FullProof object containing the proof of solvency.
     * @param verificationKey The verification key.
     * @returns A boolean indicating whether the zk proof is valid or not.
     */
    PytPos.verifyProof = function (proof, verificationKey) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, (0, verifyProof_1.default)(proof, verificationKey)];
            });
        });
    };
    return PytPos;
}());
exports.default = PytPos;