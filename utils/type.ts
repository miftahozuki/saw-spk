import { Alternatif, Kriteria, Penilaian, subKriteria } from "@prisma/client";

export type AlternatifPenilaian = Alternatif & {
  penilaian: Penilaian[];
};

export type KriteriaSubKriteria = Kriteria & {
  subkriteria: subKriteria[];
};
