"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Initial1714763496791 = void 0;
class Initial1714763496791 {
    constructor() {
        this.name = 'Initial1714763496791';
    }
    async up(queryRunner) {
        await queryRunner.query(`CREATE TABLE "users" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "email" character varying NOT NULL, "password" character varying NOT NULL, "roles" "public"."users_roles_enum" array NOT NULL DEFAULT '{user}', CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`);
    }
    async down(queryRunner) {
        await queryRunner.query(`DROP TABLE "users"`);
    }
}
exports.Initial1714763496791 = Initial1714763496791;
//# sourceMappingURL=1714763496791-initial.js.map