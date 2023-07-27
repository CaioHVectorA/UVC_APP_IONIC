type Episodios = {
    Nome: string;
    Ref: string;
    Numero: number;
};

export type Capitulo = {
    Nome: string;
    Disponivel: boolean;
    NumEps: number;
    DescCap: string;
    Episodios: Episodios[];
};

type Solo_Type = {
    Nome: string;
    Descricao: string;
    Escrito: string;
    Ref: string;
    Data: string;
    Status: string;
    Categorias: string[];
    ImgRef: string;
    Relacionados: object[];
    isAlternative: boolean;
};

type Serie_Type = {
    Nome: string;
    Descricao: string;
    Escrito: string;
    Ref: string;
    ImgRef: string;
    Data: string;
    Status: string;
    Categorias: string[];
    Relacionados: object[];
    Capitulos: Capitulo[];
};

export type Hists = (Serie_Type | Solo_Type)[];

export type Session = {
    title: string,
    subtitle: string,
    hists: Hists
}