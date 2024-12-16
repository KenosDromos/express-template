-- CreateTable
CREATE TABLE "User" (
    "id" UUID NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "username" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Profile" (
    "id" SERIAL NOT NULL,
    "fistname" TEXT,
    "lastname" TEXT,
    "birthdate" DATE,
    "description" TEXT,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "user_id" UUID NOT NULL,

    CONSTRAINT "Profile_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Token" (
    "token" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "expireAt" TIMESTAMP(3) NOT NULL,
    "valid" BOOLEAN NOT NULL DEFAULT true,
    "user_id" UUID NOT NULL,

    CONSTRAINT "Token_pkey" PRIMARY KEY ("token")
);

-- CreateTable
CREATE TABLE "AuthHistory" (
    "id" SERIAL NOT NULL,
    "login_time" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "ip_address" TEXT NOT NULL,
    "device" TEXT NOT NULL,
    "user_id" UUID NOT NULL,

    CONSTRAINT "AuthHistory_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key" ON "User"("username");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Profile_user_id_key" ON "Profile"("user_id");

-- AddForeignKey
ALTER TABLE "Profile" ADD CONSTRAINT "Profile_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Token" ADD CONSTRAINT "Token_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AuthHistory" ADD CONSTRAINT "AuthHistory_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
