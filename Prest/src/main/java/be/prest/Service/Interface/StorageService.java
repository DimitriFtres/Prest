package be.prest.Service.Interface;

import org.springframework.web.multipart.MultipartFile;

import org.springframework.core.io.Resource;
import java.nio.file.Path;
import java.util.stream.Stream;

public interface StorageService {
    public void init();
    public String save(MultipartFile file);
    public Resource load(String filename);
    public void deleteAll();
    public Stream<Path> loadAll();
    public String getEncode64(String filename);
    public byte[] compressBytes(byte[] data);
    public byte[] decompressBytes(byte[] data);
}
