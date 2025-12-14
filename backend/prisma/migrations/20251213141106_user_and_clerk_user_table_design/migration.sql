-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "name" TEXT,
    "avatar_url" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "clerkAuthUserId" TEXT,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ClerkAuthUser" (
    "id" TEXT NOT NULL,
    "clerk_user_id" TEXT NOT NULL,
    "clerk_session_id" TEXT,
    "user_id" TEXT NOT NULL,

    CONSTRAINT "ClerkAuthUser_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "ClerkAuthUser_clerk_user_id_key" ON "ClerkAuthUser"("clerk_user_id");

-- CreateIndex
CREATE UNIQUE INDEX "ClerkAuthUser_user_id_key" ON "ClerkAuthUser"("user_id");

-- AddForeignKey
ALTER TABLE "ClerkAuthUser" ADD CONSTRAINT "ClerkAuthUser_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
