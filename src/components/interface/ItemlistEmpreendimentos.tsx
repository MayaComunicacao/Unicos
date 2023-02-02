import Image from 'next/image';
import Link from 'next/link';
import ButtonEmp from './ButtonEmp';
import InfoPrice from './InfoPrice';
import TagApp from './Tag';
import { CiLocationOn } from 'react-icons/ci';

interface Props {
  Item: {
    slug: string;
    empreendimento: {
      empEtapa: string[];
      empImagemPrincipal: {
        sourceUrl: string;
      };
      parcelasAPartirDe: string;
      empLogotipoDoEmpreendimento: {
        sourceUrl: string;
      };
      empCaracteristicas: string;
      empEstagioDaObra: number;
      empEstagio: string;
      empCidade: string;
    };
  };
}

interface Icolors {
  [index: string]: string;
}

const ItemListEmpreendimentos = ({ Item }: Props) => {
  const TextColor: Icolors = {
    c: 'text-blue2',
    b: 'text-orange-500',
    a: 'text-red-900',
    d: 'text-green-700',
  };

  const { empreendimento: emp } = Item;

  return (
    <Link
      href={'/empreendimento/' + Item.slug}
      className="item border border-slate-300 rounded-3xl block bg-white shadow-xl mb-12"
    >
      <div className="h-[320px] relative">
        <TagApp tag={emp.empEtapa} />
        <Image
          src={emp.empImagemPrincipal?.sourceUrl}
          alt={'Imagem ' + Item.slug}
          fill
          className="object-cover rounded-t-3xl"
        />
      </div>
      <InfoPrice value={emp.parcelasAPartirDe} />
      <div className="px-4 py-4 min-h-[250px]">
        <div className="flex items-center min-h-[70px] max-h-[120px]">
          {emp.empLogotipoDoEmpreendimento?.sourceUrl && (
            <div className="w-[100px] h-auto block">
              <img
                src={emp.empLogotipoDoEmpreendimento?.sourceUrl}
                alt="Logo empreendimento"
              />
            </div>
          )}
          <div
            className="text-blue2 text-xs w-[calc(100%-100px)] max-h-[100px] overflow-auto pl-4"
            dangerouslySetInnerHTML={{ __html: emp.empCaracteristicas }}
          />
        </div>
        {emp.empEstagioDaObra && (
          <div className="bg-slate-200 h-[10px] my-4 w-full rounded-xl">
            <span
              className="bg-bgBlue block rounded-xl h-full"
              style={{
                width: emp.empEstagioDaObra ? emp.empEstagioDaObra + '%' : '0%',
              }}
            ></span>
          </div>
        )}
        <div className="flex justify-between items-center">
          <p>
            Estágio da obra:
            <span className={`ml-2 ${TextColor[emp.empEstagio[0]]}`}>
              {emp.empEstagio[1]}
            </span>
          </p>
          <p>{emp.empEstagioDaObra ? emp.empEstagioDaObra + '%' : ''}</p>
        </div>
        <ButtonEmp />
        {emp.empCidade && (
          <p className="flex items-center justify-center">
            <CiLocationOn size={18} />
            <span className="ml-1 text-xs">{emp.empCidade}</span>
          </p>
        )}
      </div>
    </Link>
  );
};

export default ItemListEmpreendimentos;
