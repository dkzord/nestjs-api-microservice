import { DataSource } from 'typeorm';
import { AppModule } from './app.module';
import { NestFactory } from '@nestjs/core';
import { getDataSourceToken } from '@nestjs/typeorm';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.init();

  const dataSource = app.get<DataSource>(getDataSourceToken());
  await dataSource.synchronize(true);

  const productRepo = dataSource.getRepository('Product');
  await productRepo.insert([
    {
      id: 'd79c62a2-7c3b-4a35-9b87-d87508f6f3b1',
      name: 'Teclado sem fio',
      description: 'Teclado ergonômico sem fio para facilitar sua digitação.',
      image_url: 'https://example.com/teclado_sem_fio.jpg',
      price: 99.99,
    },
    {
      id: 'b45f90bb-2043-4263-8908-692d20f4f34d',
      name: 'Mouse gamer',
      description: 'Mouse óptico com design gamer e 10 botões programáveis.',
      image_url: 'https://example.com/mouse_gamer.jpg',
      price: 79.95,
    },
    {
      id: 'e47e7a7d-53a3-465d-a9b0-fdc2e6f8dd1a',
      name: 'Monitor LED',
      description:
        'Monitor LED de alta definição para uma experiência visual imersiva.',
      image_url: 'https://example.com/monitor_led.jpg',
      price: 199.99,
    },
    {
      id: 'f3b0407f-2e8e-49b4-ae96-9d40d76b2349',
      name: 'Impressora multifuncional',
      description: 'Impressora multifuncional com scanner e conexão Wi-Fi.',
      image_url: 'https://example.com/impressora_multifuncional.jpg',
      price: 149.5,
    },
    {
      id: 'c0b8aace-76f2-4f9d-9962-8b19afaa6158',
      name: 'Notebook ultraleve',
      description:
        'Notebook ultraleve com processador rápido e longa duração da bateria.',
      image_url: 'https://example.com/notebook_ultraleve.jpg',
      price: 899.0,
    },
    {
      id: 'a4d3fcb8-2af1-43c8-af8a-b65fca423c1c',
      name: 'Headset Bluetooth',
      description:
        'Headset Bluetooth com cancelamento de ruído para chamadas cristalinas.',
      image_url: 'https://example.com/headset_bluetooth.jpg',
      price: 129.99,
    },
    {
      id: 'e4e7c5c5-47dc-41ed-bf0c-0c4850d98870',
      name: 'Mochila para laptop',
      description:
        'Mochila resistente para laptop com compartimento acolchoado.',
      image_url: 'https://example.com/mochila_laptop.jpg',
      price: 49.95,
    },
    {
      id: 'c76d01a2-0428-4fb3-8f65-b3ab1b0db8e5',
      name: 'Roteador Wi-Fi',
      description:
        'Roteador Wi-Fi de alta velocidade para uma conexão estável em toda a casa.',
      image_url: 'https://example.com/roteador_wifi.jpg',
      price: 69.99,
    },
    {
      id: 'f49a924a-7320-4c35-8279-f067bc74e1df',
      name: 'Câmera de segurança',
      description:
        'Câmera de segurança com visão noturna e detecção de movimento.',
      image_url: 'https://example.com/camera_seguranca.jpg',
      price: 129.0,
    },
    {
      id: '1a343826-f34e-4372-8de2-d64864d4c497',
      name: 'Tablet Android',
      description:
        'Tablet Android com tela de alta resolução e processador rápido.',
      image_url: 'https://example.com/tablet_android.jpg',
      price: 199.95,
    },
    {
      id: 'f60997d3-2b9d-4691-bb1a-0408602b2d6e',
      name: 'Cadeira de escritório',
      description:
        'Cadeira de escritório ergonômica com ajuste de altura e inclinação.',
      image_url: 'https://example.com/cadeira_escritorio.jpg',
      price: 149.99,
    },
    {
      id: '2383b3a9-af12-4783-9f63-ae69f11b2b17',
      name: 'Smartphone desbloqueado',
      description:
        'Smartphone desbloqueado com câmera de alta resolução e grande capacidade de armazenamento.',
      image_url: 'https://example.com/smartphone_desbloqueado.jpg',
      price: 499.0,
    },
    {
      id: '7b61a140-9a34-4c5c-9928-8d44ed024518',
      name: 'Teclado mecânico',
      description:
        'Teclado mecânico com retroiluminação RGB e switches Cherry MX.',
      image_url: 'https://example.com/teclado_mecanico.jpg',
      price: 129.95,
    },
    {
      id: 'be6ab5b0-6e53-46f6-97f3-2b3a9643f0ad',
      name: 'Caixa de som Bluetooth',
      description: 'Caixa de som Bluetooth portátil com som de alta qualidade.',
      image_url: 'https://example.com/caixa_som_bluetooth.jpg',
      price: 79.99,
    },
    {
      id: '8ff90ba6-10a7-40a8-9326-27d05ed9b45e',
      name: 'Placa de vídeo',
      description:
        'Placa de vídeo potente para uma experiência de jogo imersiva.',
      image_url: 'https://example.com/placa_video.jpg',
      price: 299.99,
    },
    {
      id: 'b17c5cf3-c035-4fc5-bc34-c59ff5a08521',
      name: 'HD externo',
      description:
        'HD externo portátil com grande capacidade de armazenamento.',
      image_url: 'https://example.com/hd_externo.jpg',
      price: 89.95,
    },
    {
      id: 'db1901ac-b6b4-4d27-9163-d1d5283c1e77',
      name: 'Webcam HD',
      description:
        'Webcam HD com microfone embutido para videoconferências nítidas.',
      image_url: 'https://example.com/webcam_hd.jpg',
      price: 59.99,
    },
    {
      id: '12af6419-d7b8-4a86-8090-943d7f43e73a',
      name: 'E-book reader',
      description:
        'E-book reader com tela antirreflexo para leitura confortável em qualquer lugar.',
      image_url: 'https://example.com/ebook_reader.jpg',
      price: 129.0,
    },
    {
      id: '17e67261-120e-4399-aac4-efc8dc4c5254',
      name: 'Kit de ferramentas',
      description:
        'Kit de ferramentas completo para pequenos reparos domésticos.',
      image_url: 'https://example.com/kit_ferramentas.jpg',
      price: 49.99,
    },
    {
      id: '50fd4375-9edf-4d12-b75b-ec8abf4c850f',
      name: 'Carregador portátil',
      description:
        'Carregador portátil com capacidade para várias recargas de smartphone.',
      image_url: 'https://example.com/carregador_portatil.jpg',
      price: 29.99,
    },
  ]);

  await app.close();
}
bootstrap();
