import { Alternatif, Kriteria, Penilaian, subKriteria } from "@prisma/client";

export type AlternatifPenilaian = Alternatif & {
  penilaian: Penilaian[];
};

export type rAlternatifPenilaian = Alternatif & {
  penilaian: rPenilaian[];
};

export type rPenilaian = Penilaian & {
  nilai: number
}

export type KriteriaSubKriteria = Kriteria & {
  subkriteria: subKriteria[];
};

export type errorMessage = {
  [key: string]: string;
};
