-- CreateTable
CREATE TABLE "product" (
    "id" SERIAL NOT NULL,
    "start" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "end" TIMESTAMP(3),
    "name_barang" TEXT,
    "stock_barang" INTEGER,

    CONSTRAINT "product_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "logAct" (
    "id" SERIAL NOT NULL,
    "start" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "end" TIMESTAMP(3),
    "user" TEXT,
    "note" TEXT,
    "status" TEXT,

    CONSTRAINT "logAct_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_ProductLog" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_ProductLog_AB_unique" ON "_ProductLog"("A", "B");

-- CreateIndex
CREATE INDEX "_ProductLog_B_index" ON "_ProductLog"("B");

-- AddForeignKey
ALTER TABLE "_ProductLog" ADD CONSTRAINT "_ProductLog_A_fkey" FOREIGN KEY ("A") REFERENCES "logAct"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ProductLog" ADD CONSTRAINT "_ProductLog_B_fkey" FOREIGN KEY ("B") REFERENCES "product"("id") ON DELETE CASCADE ON UPDATE CASCADE;
