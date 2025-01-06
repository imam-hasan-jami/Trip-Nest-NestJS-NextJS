"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateTblUser1714804456532 = void 0;
class UpdateTblUser1714804456532 {
    constructor() {
        this.name = 'UpdateTblUser1714804456532';
    }
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE "users" ADD "createdAt" TIMESTAMP NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "users" ADD "updatedAt" TIMESTAMP NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "users" ADD CONSTRAINT "UQ_97672ac88f789774dd47f7c8be3" UNIQUE ("email")`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "users" DROP CONSTRAINT "UQ_97672ac88f789774dd47f7c8be3"`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "updatedAt"`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "createdAt"`);
    }
}
exports.UpdateTblUser1714804456532 = UpdateTblUser1714804456532;
//# sourceMappingURL=1714804456532-updateTbl_user.js.map